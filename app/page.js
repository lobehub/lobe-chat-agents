import fs from 'fs/promises';
import path from 'path';

async function getAssistants() {
  try {
    const srcDir = path.join(process.cwd(), 'src');
    const files = await fs.readdir(srcDir);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    const assistants = await Promise.all(jsonFiles.map(async (file) => {
      const filePath = path.join(srcDir, file);
      const content = await fs.readFile(filePath, 'utf8');
      return JSON.parse(content);
    }));

    return assistants;
  } catch (error) {
    console.error('Error reading assistant files:', error);
    return [];
  }
}

export default async function Home() {
  const assistants = await getAssistants();

  return (
    <div>
      <h1>LobeChat Assistants</h1>
      {assistants.length > 0 ? (
        <ul>
          {assistants.map((assistant) => (
            <li key={assistant.identifier}>
              <h2>{assistant.meta.title}</h2>
              <p>{assistant.meta.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No assistants available.</p>
      )}
    </div>
  );
}