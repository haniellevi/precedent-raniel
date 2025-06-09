
import PromptEditorForm from "@/components/admin/prompt-editor-form";
import { AgentPrompt } from "@/lib/mockApi";

async function getPromptsData(): Promise<AgentPrompt[]> {
    const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/admin/prompts`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch prompts');
    return res.json();
}

export default async function ManageAiPage() {
    const prompts = await getPromptsData();
    
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
