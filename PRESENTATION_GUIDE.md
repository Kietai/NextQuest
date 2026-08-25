# How to Run NextQuest for Your Presentation

When you are ready to present this tomorrow, follow this step-by-step guide to get everything running perfectly, including the mobile sync feature!

## Step 1: Open Your Terminals
Since there are two moving parts (the database and the web interface), you will need **two separate Command Prompt or PowerShell windows** open.

1. Open your terminal.
2. Navigate to your project folder by typing:
   ```cmd
   cd c:\Users\thisi\OneDrive\Documents\NextQuest
   ```
3. Do this for both terminal windows so they are both inside the `NextQuest` folder.

## Step 2: Start the Database (Terminal 1)
In the first terminal, start the database server that handles syncing.
Copy and paste this command and hit Enter:
```cmd
npx json-server --watch backend/db.json --port 5000 --host 0.0.0.0
```
> [!NOTE] 
> You should see a smiley face `{^_^}` and it will say it is watching `db.json`. Leave this window open in the background!

## Step 3: Start the Web Server (Terminal 2)
In the second terminal, boot up the React application and expose it to your Wi-Fi network.
Copy and paste this command and hit Enter:
```cmd
npm run dev -- --host
```
> [!NOTE] 
> This will boot up extremely fast. Look at the output—it will give you your **Local** link (for your laptop) and your **Network** links (for your phone).

## Step 4: The Presentation Demo

### Showing the Laptop UI
1. Open your laptop's web browser (Chrome, Edge, etc.).
2. Go to `http://localhost:5173/`. 
3. Show off the glassmorphism dark theme UI.

### Showing the Phone Sync UI
1. Ensure your phone is connected to the exact same Wi-Fi network as the laptop.
2. Check the output of **Terminal 2**. Look for the line that says `➜  Network: http://...`.
3. Type that exact URL into your phone's browser (e.g., `http://192.168.1.15:5173/`).
4. **The Cool Part:** Add a task on your laptop. Tell the audience you just submitted it. Then, immediately swipe down to refresh the page on your phone, and the task will instantly pop up on the mobile layout! 

## Troubleshooting / Resetting Data
If you want to start your presentation with a completely clean slate:
1. Open the file `db.json` in your code editor.
2. Replace all its contents so it looks exactly like this:
```json
{
  "tasks": []
}
```
3. Save the file. The database will instantly reset!
