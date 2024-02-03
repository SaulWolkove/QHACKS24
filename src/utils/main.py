import os;
from langchain_community.llms import OpenAI
from dotenv import load_dotenv
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain, SequentialChain

def generateMealKit():

    # callable
    load_dotenv()
    API_KEY = os.environ['OPENAI_API_KEY']

    llm = OpenAI(openai_api_key="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", temperature=0.3)

    name_template = PromptTemplate(
        template="Give me the names of two meals that could be made using the following ingredients: {ingredients}. Return them in the format of a python list of strings, and return nothing else.",
        input_variables=['ingredients'],
    )

    meal_template = PromptTemplate(
        template="For this meal, generate a simple cooking instruction: {meals}",
        input_variables=['meal']
    )

    # st.title("Meal Kit Planner")
    # variable with database ingredients with expiry date < {1} day
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

    
    # have loading thang?
    print(output)
    # should get list of expired ingredients and 
    # if st.button("Generate") and temp_prompt: #temp
    #     output = llm(prompt_template.format(ingredients=temp_prompt))

generateMealKit()