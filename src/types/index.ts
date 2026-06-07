export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced'

export type SurvivalScenario = 
  | 'urban' 
  | 'wilderness' 
  | 'vehicle' 
  | 'home' 
  | 'disaster' 
  | 'medical'

export interface KnowledgeItem {
  id: string
  title: string
  description: string
  level: DifficultyLevel
  scenario: SurvivalScenario
  category: string
  content: string
  imageUrl?: string
  videoUrl?: string
  estimatedTime: number
  quiz?: Quiz
  createdAt: string
}

export interface Quiz {
  id: string
  questions: QuizQuestion[]
  passingScore: number
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswerIndex: number
  explanation: string
}

export interface EquipmentCategory {
  id: string
  name: string
  icon: string
  description: string
}

export interface Equipment {
  id: string
  name: string
  categoryId: string
  brand: string
  price: number
  rating: number
  pros: string[]
  cons: string[]
  scenarios: SurvivalScenario[]
  valueScore: number
  imageUrl: string
  description: string
  specs: Record<string, string>
  reviews: EquipmentReview[]
  createdAt: string
}

export interface EquipmentReview {
  id: string
  equipmentId: string
  userId: string
  userName: string
  rating: number
  title: string
  content: string
  usageDuration: string
  createdAt: string
  verified: boolean
}

export interface ChecklistCategory {
  id: string
  name: string
  scenario: SurvivalScenario
  description: string
  icon: string
}

export interface ChecklistTemplate {
  id: string
  name: string
  categoryId: string
  description: string
  duration: string
  items: ChecklistItem[]
  icon: string
}

export interface ChecklistItem {
  id: string
  name: string
  description: string
  priority: 'critical' | 'high' | 'medium' | 'low'
  quantity: string
  notes?: string
}

export interface CommunityPost {
  id: string
  userId: string
  userName: string
  userAvatar: string
  title: string
  content: string
  category: 'experience' | 'discussion' | 'question' | 'regional'
  region?: string
  tags: string[]
  likes: number
  comments: number
  createdAt: string
  isEmergency?: boolean
}

export interface Comment {
  id: string
  postId: string
  userId: string
  userName: string
  userAvatar: string
  content: string
  likes: number
  createdAt: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}
