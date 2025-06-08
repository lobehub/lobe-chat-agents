import { z } from 'zod';

/**
 * LLM message role types
 */
export const lLMRoleTypeSchema = z.union([
  z.literal('user'),
  z.literal('system'),
  z.literal('assistant'),
  z.literal('function'),
]);

/**
 * LLM message structure
 */
export const lLMMessageSchema = z.object({
  /**
   * Message content text
   */
  content: z.string(),
  /**
   * Role of the message sender
   */
  role: lLMRoleTypeSchema,
});

/**
 * Array of LLM chat messages
 */
export const lLMChatsSchema = z.array(lLMMessageSchema);

/**
 * LLM model parameters for fine-tuning behavior
 */
export const lLMParamsSchema = z.object({
  /**
   * Frequency penalty to reduce repetition
   * @default 0
   */
  frequency_penalty: z.number().optional().default(0),
  /**
   * Maximum number of tokens to generate
   */
  max_tokens: z.number().optional(),
  /**
   * Presence penalty to encourage topic diversity
   * @default 0
   */
  presence_penalty: z.number().optional().default(0),
  /**
   * Sampling temperature for randomness control
   * @default 0
   */
  temperature: z.number().optional().default(0),
  /**
   * Top-p sampling for nucleus sampling
   * @default 1
   */
  top_p: z.number().optional().default(1),
});

/**
 * Knowledge Base Item Schema
 */
export const knowledgeBaseItemSchema = z.object({
  avatar: z.string().nullable(),
  createdAt: z.date(),
  description: z.string().optional().nullable(),
  enabled: z.boolean().optional(),
  id: z.string(),
  isPublic: z.boolean().nullable(),
  name: z.string(),
  settings: z.any(),
  type: z.string().nullable(),
  updatedAt: z.date(),
});

export type KnowledgeBaseItem = z.infer<typeof knowledgeBaseItemSchema>;
