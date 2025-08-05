export const loginFields = ['username', 'password'] as const;
export type LoginField = (typeof loginFields)[number];
