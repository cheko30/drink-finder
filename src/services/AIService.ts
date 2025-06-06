import { streamText } from "ai"
import { openRouter } from "../lib/ai"

export default {
    async generateRecipe(prompt:string) {
        const result = streamText({
            model: openRouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt: prompt
        })

        return result.textStream
    }
}