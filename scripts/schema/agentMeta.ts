import { z } from 'zod';

import { knowledgeBaseItemSchema, lLMChatsSchema, lLMParamsSchema } from './llm';

export const metaDataSchema = z.object({
  /**
   * Avatar image URL or path
   */
  avatar: z.string(),
  /**
   * Background color for the agent
   */
  backgroundColor: z.string().optional(),
  /**
   * Category classification
   */
  category: z.string().optional(),
  /**
   * Description of the agent
   */
  description: z.string(),
  /**
   * Tags for categorization and search
   */
  tags: z.array(z.string()),
  /**
   * Display title of the agent
   */
  title: z.string(),
});

const lobeAgentConfigSchema = z.object({
  /**
   * Compression threshold value
   */
  compressThreshold: z.number().optional(),
  /**
   * Display mode for the agent interface
   */
  displayMode: z.union([z.literal('chat'), z.literal('docs')]).optional(),
  /**
   * Enable compression threshold
   */
  enableCompressThreshold: z.boolean().optional(),
  /**
   * Enable history count tracking
   */
  enableHistoryCount: z.boolean().optional(),
  /**
   * Enable maximum tokens limit
   */
  enableMaxTokens: z.boolean().optional(),
  /**
   * Few-shot examples for better AI responses
   */
  fewShots: lLMChatsSchema.optional(),
  /**
   * Number of historical messages to keep
   */
  historyCount: z.number().optional(),
  /**
   * Input template for message formatting
   */
  inputTemplate: z.string().optional(),

  /**
   * knowledge bases
   */
  knowledgeBases: z.array(knowledgeBaseItemSchema).optional(),

  /**
   * Language model used by the agent
   */
  model: z.string().optional(),

  /**
   * Opening greeting message
   */
  openingMessage: z.string().optional(),

  /**
   * Suggested opening questions
   */
  openingQuestions: z.array(z.string()).optional(),

  /**
   * Language model parameters
   */
  params: lLMParamsSchema.optional(),

  /**
   * Enabled plugins for the agent
   */
  plugins: z.array(z.string()).optional(),

  /**
   * System role/persona definition
   */
  systemRole: z.string(),
});

export type LobeAgentConfig = z.infer<typeof lobeAgentConfigSchema>;

export const lobeAgentSchema = z.object({
  /**
   * Author of the agent
   */
  author: z.string(),
  /**
   * Agent configuration settings
   */
  config: lobeAgentConfigSchema,
  /**
   * Creation timestamp
   */
  createdAt: z.string(),
  /**
   * Example conversations
   */
  examples: lLMChatsSchema.optional(),
  /**
   * Homepage or repository URL
   */
  homepage: z.string(),
  /**
   * Unique identifier for the agent
   */
  identifier: z.string(),

  /**
   * knowledge count
   */
  knowledgeCount: z.number(),

  /**
   * Metadata information
   */
  meta: metaDataSchema,

  /**
   * Plugins count
   */
  pluginCount: z.number(),

  /**
   * Schema version number
   */
  schemaVersion: z.number(),

  /**
   * Summary or brief description of the agent
   */
  summary: z.string().optional(),
});

export type LobeAgent = z.infer<typeof lobeAgentSchema>;
