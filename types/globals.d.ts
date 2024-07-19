
export interface User {
  id: string;
  profile_image_url?: string;
  username: string;
  email_addresses: { email_address: string }[];
}

export interface Task {
  id: string;
  title: string;
  description: string | null;
  date: string;
  isCompleted: boolean;
  isImportant: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}
