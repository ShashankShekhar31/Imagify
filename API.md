# API Documentation

## Authentication

POST /api/user/register

Registers a new user.

---

POST /api/user/login

Authenticates an existing user.

---

GET /api/user/credits

Returns current credit balance.

---

## Images

POST /api/image/generate-image

Generate AI image.

---

POST /api/image/history

Returns generated image history.

---

DELETE /api/image/delete/:id

Deletes an image.

---

PUT /api/image/favorite/:id

Toggle image favorite status.

---

## Dashboard

GET /api/image/dashboard

Returns

- Total Images
- Remaining Credits
- Latest Prompt

---

Authentication

JWT Token required for all protected routes.

Authorization:

token: <JWT_TOKEN>