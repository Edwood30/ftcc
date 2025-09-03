export type DivisionKey =
  | 'agriculture-kadiwa'
  | 'aircraft-aia'
  | 'fintech-westcoast'
  | 'health-tech-clinic'
  | 'marine-vertex'
  | 'transportation-dotr'
  | 'it-department'

export interface DivisionInfo {
  key: DivisionKey
  name: string
  description: string
}


