import { useState } from 'react'

import './App.css'
import { jobsAtom, networkAtom ,messagesAtom,notificationAtom, totalNotificationCount} from './atoms' 
import {RecoilRoot, useRecoilState, useRecoilValue} from 'recoil'

function App() {
  return(
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  // We will define 4 atoms , think of it just like useState

  const [networkCount,setnetworkCount] = useRecoilState(networkAtom)
  const [jobCount,setjobCount] = useRecoilState(jobsAtom)
  const [messageCount,setmessageCount] = useRecoilState(messagesAtom)
  const [notificationCount,setnotificationCount] = useRecoilState(notificationAtom)

  const totalNotification = useRecoilValue(totalNotificationCount)
  return (
    <>
      <button>Home</button>
      <button>My Network({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobCount >= 100 ? "99+" : jobCount})</button>
      <button>Messages ({messageCount >= 100 ? "99+" : messageCount})</button>
      <button>Notifications ({notificationCount >= 100 ? "99+" : notificationCount})</button>
      <button onClick={() => {
        setmessageCount(messageCount+1);
      }}>Me</button>
      <button>Total Notification ({totalNotification})</button>
    </>
  )
}

export default App
