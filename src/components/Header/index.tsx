import { Contaier, Logo, UserPhoto } from "./styles";
import dailydietLogo from '@assets/dailydietLogo.png'
import userPhoto from '@assets/userPhoto.png'

export function Header() {
  return (
    <Contaier>
      <Logo source={dailydietLogo} />
      <UserPhoto source={userPhoto}/>
    </Contaier>
  );
}