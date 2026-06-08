#!/usr/bin/env python3
import re

# Read the file
with open('/workspace/src/pages/Practice.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Define patterns for each project section
projects = ['01-0', '02-0', '03-0', '04-0', '05-0', '06-0', '07-0', '08-0', '09-0', '10-0']

for project in projects:
    # Pattern to find quizQuestions section
    quiz_pattern = rf"'{project}':\s*\{{\s*title:.*?quizQuestions:\s*\[(.*?)\],\s*judgmentQuestions:"
    quiz_match = re.search(quiz_pattern, content, re.DOTALL)
    
    if quiz_match:
        quiz_content = quiz_match.group(1)
        # Find all questions (id: X,)
        questions = re.findall(r'\{\s*id:\s*(\d+),', quiz_content)
        print(f"{project}: Found {len(questions)} quiz questions: {questions}")

    # Pattern to find judgmentQuestions section  
    judgment_pattern = rf"'{project}':\s*\{{.*?judgmentQuestions:\s*\[(.*?)\],\s*codingChallenges:"
    judgment_match = re.search(judgment_pattern, content, re.DOTALL)
    
    if judgment_match:
        judgment_content = judgment_match.group(1)
        questions = re.findall(r'\{\s*id:\s*(\d+),', judgment_content)
        print(f"{project}: Found {len(questions)} judgment questions: {questions}")
    
    # Pattern to find codingChallenges section
    coding_pattern = rf"'{project}':\s*\{{.*?codingChallenges:\s*\[(.*?)\]\s*\}}"
    coding_match = re.search(coding_pattern, content, re.DOTALL)
    
    if coding_match:
        coding_content = coding_match.group(1)
        challenges = re.findall(r'\{\s*id:\s*(\d+),', coding_content)
        print(f"{project}: Found {len(challenges)} coding challenges: {challenges}")
    
    print("---")

print(f"Total file size: {len(content)} bytes")