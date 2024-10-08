# CloudHosting

## Overview

This is a cloud-hosted application built with Next.js where an admin can post publications, and users can add comments. The project leverages modern web technologies to provide a seamless experience for both admins and users.

## Features

- **Admin Panel**: Admins can create, edit, and delete publications.
- **User Interaction**: Users can view publications and post comments.
- **Authentication**: Role-based access (admin and user) for specific actions.
- **Real-time Updates**: Publications and comments are updated in real-time.

## <span style="color: orange;">Tech Stack</span>

- **Frontend**: Next.js, React
- **Backend**: Node.js (API routes in Next.js)
- **Database**: MongoDB (or your preferred database)
- **Authentication**: NextAuth.js (or alternative)
- **Deployment**: Vercel/Heroku/AWS (choose based on what you’re using)

##<Installation>

### Prerequisites

- Node.js >= 14.x
- Postgres 

### <span style="color: teal;">Steps</span>

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd project-directory
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

   Create a `.env.local` file with the following variables:

    ```bash
    DATABASE_URL=mongodb+srv://<your-mongodb-url>
    NEXTAUTH_SECRET=<your-secret>
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

- **Admin**: Log in as an admin to post or manage publications.
- **Users**: View publications and leave comments.


