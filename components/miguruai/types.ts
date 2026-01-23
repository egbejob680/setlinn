export type MiguruMessage = {
    id: string
    sender: "user" | "miguru"
    text: string
    timestamp?: number
  }
  