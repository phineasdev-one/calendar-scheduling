# Calendar Scheduling Application  

A modern calendar scheduling application built with **Next.js 14** and **Prisma**. This application allows users to create events, book meeting slots, and manage their schedules with ease.  

## Features  
- **Event Management**:  
  - Create, edit, and delete events.  
  - Customize event details such as title, description, and duration.  

- **Meeting Booking**:  
  - Allow attendees to view available slots and book meetings.  
  - Automatic conflict detection to prevent double bookings.  

- **User Authentication**:  
  - Secure user login and registration.  
  - Token-based authentication with support for OAuth providers.  

- **Responsive Design**:  
  - Optimized for both desktop and mobile devices.  

- **Database Management**:  
  - Leveraging Prisma ORM for database operations.  
  - Support for PostgreSQL (or any compatible database).  

## Tech Stack  

- **Frontend**:  
  - [Next.js 14](https://nextjs.org/) for server-rendered React applications.  
  - TailwindCSS for modern styling.  

- **Backend**:  
  - API routes in Next.js to handle server-side logic.  

- **Database**:  
  - [Prisma ORM](https://www.prisma.io/) for database interactions.  
  - PostgreSQL as the primary database.  

- **Authentication**:  
  - [NextAuth.js](https://next-auth.js.org/) for authentication and session management.  

## Getting Started  

### Prerequisites  
Ensure you have the following installed:  
- Node.js (v18 or later)  
- PostgreSQL  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/phineasdev-one/calendar-scheduling 
   cd calendar-scheduling  
Install dependencies:

```bash
npm install
```
Configure environment variables:
Create a .env file at the root of the project and add the following:

env
```bash
AUTH_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

NYLAS_API_SECRET_KEY=
NYLAS_API_URL=https://api.us.nylas.com
NYLAS_CLIENT_ID=
NEXT_PUBLIC_URL=http://localhost:3000

DATABASE_URL="postgresql://postgres.acvs:password@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.acvs:password@aws-0-ap-northeast-2.pooler.supabase.com:5432/postgres" 

UPLOADTHING_TOKEN= use uploadthing token
```
Set up the database:
Run the following Prisma commands to set up the database schema:

Roadmap
 Integrate notifications for event reminders.
 Add support for recurring events.
 Enable multi-language support.
 Implement integration with external calendars (Google, Outlook, etc.).
Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For inquiries or issues, contact [your email here].