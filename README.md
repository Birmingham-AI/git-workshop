# Git Workshop & Introduction to Generative AI

## Overview

Hey, welcome to the Git Workshop & Introduction to Generative AI! This workshop is designed to help you get started with
Git and GitHub, and to introduce you to the world of generative AI.

## Resources

- Slide deck
- [Git cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- Google's Prompt Engineering [guide](https://developers.google.com/machine-learning/resources/prompt-eng)
- OpenAI's [guide](https://platform.openai.com/docs/guides/prompt-engineering)

## Workshop

### Step 1. Clone the repository

```bash
git clone ...
```

### Step 2. Install the dependencies

```bash
cd app
npm install
```

### Step 3. Create a `.env` file and add our API key

```bash
touch .env && echo "OPENAI_API_KEY=TO_BE_SHARED" > .env
```

### Step 4. Install VS Code extensions

When you open the project in VS Code, you will be prompted to install the recommended extensions. Click "Install All" to
install the extensions. In case they don't load, there's only one:
[`REST Client`](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

### Step 5. Start the application

```bash
npm run watch
```

You'll see a response of `Server is running on port 3000` in the terminal.

### Step 6. Test the application

Open the `requests/samples.http` file and send the `healthcheck` request to the server. You should see a response with a
status of `200` (which means everything is working fine).

### Step 7. Create a new branch

```bash
git checkout -b feature/your-name/your-feature
```

### Step 8. Make a change

Let's start by adding a new endpoint to the server. Copy the `routes/healthcheck.js` file and paste it in the same
folder. Rename the file to `routes/<yourFeature>.js`.

Then, open the `app.js` file and add import the new route file at the top of the file:

```javascript
const yourFeature = require("./routes/yourFeature");
```

Finally, add the new route to the server:

```javascript
app.use("/yourFeature", yourFeature);
```

You should now be able to test the new endpoint by sending a request to `http://localhost:3000/yourFeature` using the
`requests/samples.http` file.

However, you haven't modified the prompt yet, so you'll just get the same response as the `healthcheck` endpoint. **This
is where you start your feature!**

Your file has a `hardcodedPrompt` variable that you can modify to change the prompt. You'll spend the remainder of this
middle portion of the workshop modifying this prompt to generate different responses. This is called **prompt
engineering**.

### Step 9. Create a commit

As you make changes to the code, you'll want to create a commit to save your progress. You can do this by running:

```bash
git add .
git commit -m "Add new endpoint for <yourFeature>"
```

### Step 10. Push the commit

When you're ready to share your changes with the rest of the team, you can push your commit to the remote repository:

```bash
git push origin feature/your-name/your-feature
```

### Step 11. Create a pull request

And, finally, you can create a pull request on GitHub. You'll use the description to explain the changes you've made and
to share your strategy for prompt engineering with the rest of the group. There's a template that will help you
structure your pull request.

### Did you reach the end?

You're not limited to only the assigned endpoint! If you've got time — and curiosity — create a new branch and add a new
endpoint to the server. You can use the same prompt engineering strategy you've learned to generate responses for this
new endpoint.

Start by checking out `main` so you're not working on the same branch as your previous feature:

```bash
git checkout main
```

Then, create a new branch and follow the same steps as before:

```bash
git checkout -b feature/your-name/your-new-feature
```
