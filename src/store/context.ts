import React, { useReducer, PropsWithChildren } from "react";

// Định nghĩa kiểu dữ liệu cho UserContext
interface UserContextType {
  state: any;
  dispatch: React.Dispatch<any>;
}

// Tạo context với giá trị mặc định là undefined
const UserContext = React.createContext<UserContextType | undefined>(undefined);

export const UserProvider = UserContext.Provider;
export default UserContext;
