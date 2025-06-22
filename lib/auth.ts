export const ROLES = {
  BUYER: 'buyer',
  SELLER: 'seller',
  ADMIN: 'admin',
  DEVELOPER: 'developer'
} as const

export type UserRole = typeof ROLES[keyof typeof ROLES]

export const PLANS = {
  FREE: 'free',
  PRO: 'pro'
} as const

export type Plan = typeof PLANS[keyof typeof ROLES]

export const FREE_PLAN_FEATURES = [
  'Basic profile listing',
  'Limited project visibility',
  '5% platform fee',
  'Basic support',
  'Standard portfolio'
] as const

export const PRO_PLAN_FEATURES = [
  'Enhanced profile visibility',
  'Priority project listing',
  '15% platform fee',
  'Priority support',
  'Premium portfolio',
  'Custom domain',
  'Analytics dashboard',
  'Advanced features'
] as const

export const getPlanFeatures = (plan: Plan) => {
  return plan === PLANS.PRO ? PRO_PLAN_FEATURES : FREE_PLAN_FEATURES
}

export const getPlanFee = (plan: Plan) => {
  return plan === PLANS.PRO ? 15 : 5
}
