import os;
import json
from langchain_community.llms import OpenAI as aiOpen
from dotenv import load_dotenv
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain, SequentialChain
from openai import OpenAI


mealkit_generation_function = [
    {
        'name': 'extract_meal_info',
        'description': 'Get the meal names, descriptions, and required ingredients to update database',
        'parameters': {
            'type': 'object',
            'properties' : {
                'name': {
                    'type': 'string',
                    'description': 'meal kit'
                },
                'description': {
                    'type': 'string',
                    'description': 'recipe description'
                },
                'ingredients': {
                    'type': 'list',
                    'description': 'ingredients required for the mealkit'
                },
                'username': {
                    'type':'string',
                    'description': 'User to which the ingredients and meal kit suggestions belong to'
                }
            }
        }
    }
]

def generateMealText():
    load_dotenv()
    API_KEY = os.environ['OPENAI_API_KEY']

    llm = aiOpen(openai_api_key="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", temperature=0.3)

    name_template = PromptTemplate(
        template="Give me the names of two meals that could be made using the following ingredients: {ingredients}. Return them in the format of a python list of strings, and return nothing else.",
        input_variables=['ingredients'],
    )

    meal_template = PromptTemplate(
        template="For this meal, generate a simple cooking instruction: {meals}",
        input_variables=['meal']
    )

    # variable with database ingredients with expiry date < {1} day *** FROM BEN'S COMPONENT ***
    #       different util to access these probably
    # TODO: Figure out how many ingredients put into one api request, maybe one from each category until no more can fill all categories

    temp_prompt = "rice, chicken, beans, tomato"

    meal_name_chain = LLMChain(
        llm = llm,
        prompt = name_template,
        verbose = True,
        output_key='meals',
    )

    description_chain = LLMChain(
        llm = llm,
        verbose=True,
        prompt=meal_template,
        output_key='meal_descrips',
    )
    
    overall_chain = SequentialChain(
        chains = [meal_name_chain, description_chain],
        input_variables=['ingredients'],
        output_variables=['meals', 'meal_descrips'],
        verbose=True,
    )

    output = overall_chain({ 'ingredients': temp_prompt})

    return output

def mealJSONObject():
    load_dotenv()
    client = OpenAI(api_key=os.environ['OPENAI_API_KEY'])

    meal_description = generateMealText()

    print(meal_description)
    response = client.chat.completions.create(
        model = 'gpt-3.5-turbo',
        functions=mealkit_generation_function,
        function_call='auto',
        messages = [{'role': 'user', 'content': meal_description}]
    )

    json_response = json.loads(response.choices[0].message.function_call.arguments)
    print(json_response)

mealJSONObject()