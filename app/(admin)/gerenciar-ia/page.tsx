
import { getAgentPrompts } from "@/lib/mockApi";
import PromptEditorForm from "@/components/admin/prompt-editor-form";

export default async function ManageAiPage() {
    const prompts = await getAgentPrompts();
    
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Gerenciar Agentes de IA</h1>
                <p className="text-muted-foreground mt-2">
                    Edite os prompts de sistema para refinar o comportamento e a qualidade das respostas da IA.
                </p>
            </div>

            {prompts.map((prompt) => (
                <PromptEditorForm key={prompt.id} promptData={prompt} />
            ))}
        </div>
    );
}
