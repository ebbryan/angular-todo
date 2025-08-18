export type Todo = {
  id: string;
  status: 'pending' | 'completed' | 'in_progress' | 'archived';
  title: string;
  createdAt: string;
  updatedAt: string;
};

export type TodosResponse = {
  data: Todo[];
  success: boolean;
};
