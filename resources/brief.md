# Project Brief: Smart Product Design Assistant for Eco-Friendly Consumer Electronics

## Background

With the growing demand for sustainable and eco-friendly consumer electronics, our company, EcoTech Innovations, is launching a new line of products designed to minimize environmental impact while providing cutting-edge technology to consumers. As part of this initiative, we are developing a Smart Product Design Assistant to help our team of engineers and designers streamline the product development process.

## Objective

The Smart Product Design Assistant is a web application that leverages generative AI to assist our engineers and designers in various tasks related to product development. This tool will help them generate detailed product descriptions, select appropriate materials, get design feedback, solve engineering problems, summarize market analyses, and recommend sustainability improvements.

## Tasks

Your goal is to extend the Smart Product Design Assistant by creating additional routes that handle specific tasks. Each route will use a hardcoded prompt and accept user input as context to generate responses from the AI.

## Routes to Implement

### Product Description Generator

- **Route**: /product-description
- **Context**: Specifications like material, dimensions, features, and target market.

### Material Selection Advice

- **Route**: /material-advice
- **Context**: Characteristics such as durability, weight, cost, and environmental impact.

### Design Feedback

- **Route**: /design-feedback
- **Context**: Description of the design, including purpose, target audience, and unique features.

### Engineering Problem Solver

- **Route**: /engineering-solution
- **Context**: Description of an engineering problem, including relevant constraints and desired outcomes.

### Market Analysis Summary

- **Route**: /market-analysis
- **Context**: Key points about a specific market or industry.

### Sustainability Recommendations

- **Route**: /sustainability
- **Context**: Description of a product or process and any known environmental impacts.

## Deliverables

- **Functional Routes**: Implement the routes described above, ensuring they interact correctly with the OpenAI API and return appropriate responses.
- **Documentation**: Provide brief documentation for each route, including the hardcoded prompt and example input/output.
- **Testing**: Ensure each route is thoroughly tested to validate functionality.

## Evaluation Criteria

- **Correctness**: The routes should correctly use the OpenAI API to generate appropriate responses based on the given prompts and context.
- **Modularity**: The application should be structured in a modular way, allowing for easy addition of new routes in the future.
- **Documentation**: Clear and concise documentation should be provided for each route.
- **Usability**: The routes should be tested and validated to ensure they work as expected.
