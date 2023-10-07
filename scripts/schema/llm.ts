import { z } from 'zod';

export const lLMRoleTypeSchema = z.union([
  z.literal('user'),
  z.literal('system'),
  z.literal('assistant'),
  z.literal('function'),
]);

export const lLMMessageSchema = z.object({
  content: z.string(),
  role: lLMRoleTypeSchema,
});

export const lLMChatsSchema = z.array(lLMMessageSchema);

export const lLMParamsSchema = z.object({
  frequency_penalty: z.number().optional().default(0),
  max_tokens: z.number().optional(),
  presence_penalty: z.number().optional().default(0),
  temperature: z.number().optional().default(0),
  top_p: z.number().optional().default(1),
});
