# How to Run NextQuest for a Presentation

NextQuest has two local services: a JSON Server API and the Vite frontend. Run each in its own terminal from the project root.

## 1. Install dependencies

```bash
npm install
```

## 2. Start the database API

In Terminal 1:

```bash
npx json-server --watch db.json --port 5000 --host 0.0.0.0
```

Leave this terminal running. The API will serve tasks at `http://localhost:5000/tasks`.

## 3. Start the frontend

In Terminal 2:

```bash
npm run dev -- --host
```

Open the local URL shown by Vite, usually `http://localhost:5173/`.

## 4. Presentation flow

### Laptop demo

1. Open the local Vite URL in a browser.
2. Point out the workload stress meter.
3. Add a task with a close deadline and several hours of effort.
4. Show how it rises in the Priority Focus view and receives an urgency indicator.
5. Mark a task complete, then show it in the completed section under All Tasks.

### Phone or second-device demo

1. Connect the second device to the same Wi-Fi network as the computer.
2. Use the **Network** URL printed by Vite, such as `http://192.168.1.15:5173/`.
3. Add or complete a task on one device.
4. Refresh the other device to load the latest data from JSON Server.

Both devices must be able to reach the computer’s local network address, and both services must remain running.

## Reset the demo data

To start with an empty workload, replace the contents of `db.json` with:

```json
{
  "tasks": []
}
```

Restart JSON Server if it does not detect the change automatically.

## Troubleshooting

- If the task list is empty or does not load, confirm JSON Server is running on port `5000`.
- If the phone cannot open the app, confirm both devices are on the same Wi-Fi and that Vite was started with `--host`.
- If changes do not appear on another device, refresh the page; the app uses the shared JSON Server data but does not stream live updates.
