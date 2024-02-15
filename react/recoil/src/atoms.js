import {atom, selector} from "recoil";

export const networkAtom = atom({
    key : "networkAtom",
    default: 102
})

export const jobsAtom = atom({
    key : "jobsAtom",
    default: 10
})

export const messagesAtom = atom({
    key : "messagesAtom",
    default: 8
})

export const notificationAtom = atom({
    key : "notificationAtom",
    default: 102
})

export const totalNotificationCount = selector({
    key : "totalNotificationCount",
    get : (({get})=> {
        const networkAtomCount = get(networkAtom)
        const notificationAtomCount = get(notificationAtom)
        const messagesAtomCount = get(messagesAtom)
        const jobsAtomCount = get(jobsAtom)

        return networkAtomCount + notificationAtomCount + messagesAtomCount +jobsAtomCount

    })
})