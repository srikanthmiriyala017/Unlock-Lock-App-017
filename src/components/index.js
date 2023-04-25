import {useState} from 'react'

import {MainContainer, Heading, Button, Image} from './styledComponents'

const Unlock = () => {
  const [setLock, SetUnlock] = useState(true)
  const onClickColor = () => {
    SetUnlock(prevState => !prevState)
  }
  return (
    <MainContainer>
      {setLock ? (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}
      {setLock ? (
        <Heading>Your Device is Locked</Heading>
      ) : (
        <Heading>Your Device is Unlocked</Heading>
      )}
      {setLock ? (
        <Button type="button" onClick={onClickColor}>
          Unlocked
        </Button>
      ) : (
        <Button type="button" onClick={onClickColor}>
          Locked
        </Button>
      )}
    </MainContainer>
  )
}
export default Unlock
