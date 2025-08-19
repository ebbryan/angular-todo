export type TodoType = {
  id: string;
  status: 'pending' | 'completed' | 'in_progress' | 'archived';
  title: string;
  createdAt: string;
  updatedAt: string;
};

export type TodosResponse = {
  data: TodoType[];
  success: boolean;
};
