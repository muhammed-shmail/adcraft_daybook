export enum UserRole {
  OWNER = 'owner',
  ADMIN = 'admin',
  STAFF = 'staff'
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  password?: string; // Optional for interface usage, but required for usage
}

export interface SaleItem {
  id: string;
  productName: string;
  quantity: number;
  rate: number;
  total: number;
}

export type PaymentMethod = 'Cash' | 'UPI' | 'Credit' | 'Debit';

export interface Sale {
  id: string;
  invoiceNo: string;
  date: string; // ISO String
  customerName: string;
  items: SaleItem[];
  discount: number;
  total: number;
  paymentMethod: PaymentMethod;
}

export interface Purchase {
  id: string;
  date: string; // ISO String
  supplierName: string;
  itemName: string;
  quantity: number;
  purchaseRate: number;
  mrp: number;
  total: number;
  paymentMethod: PaymentMethod;
}

export interface Expense {
  id: string;
  date: string; // ISO String
  expenseType: string;
  description: string;
  amount: number;
  paymentMethod: PaymentMethod;
}

export interface DashboardStats {
  totalSales: number;
  totalPurchases: number;
  totalExpenses: number;
}

export interface TailoringOrder {
  id: string;
  customerName: string;
  deliveryDate: string; // ISO String
  measurements: string;
  materialName: string;
  assignedStaff: string; // Name of staff
  status: 'Pending' | 'Completed' | 'Delivered';
  amount: number;
  paidAmount: number;
  balance: number;
}

export interface ChartData {
  name: string;
  sales: number;
  expenses: number;
  purchases: number;
}

export interface CashHandover {
  id: string;
  date: string; // ISO String (Date of entry)
  amount: number;
  description?: string;
}