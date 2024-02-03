import os;
from langchain_community.llms import OpenAI;
from dotenv import load_dotenv
from langchain.prompts import PromptTemplate
import streamlit as st

# callable
load_dotenv()
API_KEY = os.environ['OPENAI_API_KEY']
print(API_KEY)

llm = OpenAI(openai_api_key="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", temperature=0.3)

prompt_template = PromptTemplate(
    template="Give me an example of a meal that could be made using the following ingredients: {ingredients}"
    input_variables=['ingredients']
)

st.title("Meal Kit Planner")
# variable with database ingredients with expiry date < {1} day
#       different util to access these probably
# TODO: Figure out how many ingredients put into one api request, maybe one from each category until no more can fill all categories

temp_prompt = "rice, chicken, beans"

if st.button("Generate") and temp_prompt: #temp
    output = llm(prompt_template.format(ingredients=temp_prompt))