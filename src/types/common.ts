export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset'; // ✅ ADDED safely for form buttons
  className?: string;
}

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'date'; // ✅ ADDED "tel" and "date" types
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void; // ✅ Extended to handle selects, textareas
  label?: string;
  autoComplete?: string; 
  name?: string; // ✅ ADDED safely for form inputs
  error?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
}
