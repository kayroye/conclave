export interface User {
  id: string;
  name: string;
  createdAt: Date;
  chats: string[]; // Array of chat IDs
  preferences: UserPreferences;
  apiKeys?: APIKeys;
}

export interface UserPreferences {
  notifications?: boolean;
  defaultAIProvider?: AIProvider;
}

export interface APIKeys {
  openai?: string;
  anthropic?: string;
  google?: string;
  ollamaEndpoint?: string;
}

export type AIProvider = 'openai' | 'anthropic' | 'google' | 'ollama';

export interface Chat {
  id: string;
  name: string;
  createdAt: Date;
  participants: string[]; // Array of user IDs
  aiParticipants: AIChatParticipant[];
  messages: ChatMessage[];
}

export interface AIChatParticipant {
  id: string;
  name: string;
  provider: AIProvider;
  model: string;
  systemPrompt?: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  createdAt: Date;
  senderId: string; // Can be user ID or AI participant ID
  senderName: string;
  isAI: boolean;
} 