import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1000,
    messages=[
        {
            "role": "user",
            "content": "Generate a funny team name."
        }
    ]
)
print(message.content)