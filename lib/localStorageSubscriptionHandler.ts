export const setSubscription = (id: number, value: boolean): void => {
  let ids: number[] = getSubscriptions()
  let index: number = ids.indexOf(id)
  if (index === -1 && value) {
    ids.push(id)
  } else if (index !== -1 && !value) {
    ids.splice(index, 1)
  }
  localStorage.setItem('repo-subscriptions', JSON.stringify(ids))
}

export const getSubscriptions = (): number[] => {
  const subs = localStorage.getItem('repo-subscriptions')
  if (!subs) {
    return []
  }

  return JSON.parse(subs)
}
