import { FC } from "react"
import { LoginForms } from "../../forms/loginForms/LoginForms"

interface LoginProps {

}

export const Login: FC<LoginProps> = () => {
  return (
    <div>
      <LoginForms/>
    </div>
  )
}
