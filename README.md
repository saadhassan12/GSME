# GSME - Global Smart Move Enterprises Website

Professional corporate website for **Global Smart Move Enterprises (GSME)** with React frontend and Laravel backend.

**Domain:** www.gsme26.com

## Project Structure

```
GSME/
├── frontend/     # React + Vite + Tailwind CSS
├── backend/      # Laravel API (contact form)
└── logo.png      # Company logo
```

## Pages

- **Home** — Hero, services preview, why choose GSME, vision & mission
- **Services** — All 8 business services from company profile
- **About Us** — Company story, vision, mission, industries
- **Contact** — Contact form + company details

## Quick Start (Development)

### Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Frontend runs at: http://localhost:5173

### Backend

```bash
cd backend
composer install
php artisan migrate
php artisan serve
```

Backend runs at: http://localhost:8000

### Contact Form API

`POST /api/contact`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+923001234567",
  "subject": "Business Inquiry",
  "message": "Your message here"
}
```

## Production Build

### Frontend

```bash
cd frontend
npm run build
```

Deploy the `frontend/dist` folder to your web server.

### Backend

1. Set up MySQL/PostgreSQL in `.env`
2. Run `php artisan migrate --force`
3. Configure mail settings in `.env` for contact form emails
4. Deploy to your server (Apache/Nginx + PHP 8.2+)

## Environment Variables

### Frontend (.env)

```
VITE_API_URL=https://api.gsme26.com/api
```

### Backend (.env)

```
FRONTEND_URL=https://www.gsme26.com
CONTACT_EMAIL=fareedanoori8855@gmail.com
MAIL_MAILER=smtp
MAIL_HOST=your-smtp-host
MAIL_PORT=587
MAIL_USERNAME=your-email
MAIL_PASSWORD=your-password
```

## Company Details

| Field | Value |
|-------|-------|
| Company | Global Smart Move Enterprises |
| NTN | J218030-5 |
| Address | Office 4, 5th Floor, Khyber 4 Plaza, G-15 Markaz, Islamabad, Pakistan |
| Contact | Fareeda Noori |
| Email | fareedanoori8855@gmail.com |
| Phone | +923305448855 |
| Website | www.gsme26.com |

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS, React Router
- **Backend:** Laravel 12, SQLite/MySQL, Mail API
- **Theme:** Blue & White with gold accents from brand logo
