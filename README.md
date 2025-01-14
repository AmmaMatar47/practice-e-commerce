# Assignment Documentation: React Application with Redux, Redux Toolkit, Axios, Platzi Fake Store API, and Authentication

## Assignment Overview:
In this assignment, you will create a React app with **Redux**, **Redux Toolkit**, **Axios**, and **Platzi Fake Store API** to implement **user authentication** (sign up, login, token persistence) and display product data. The app will have multiple pages and interact with the API to handle product management.

---

## Key Technologies:
- **React**: Build UI components.
- **Redux Toolkit**: Manage global state (authentication, products).
- **Axios**: Make HTTP requests.
- **Platzi Fake Store API**: Handle product data and user authentication.
- **React Router**: Manage page navigation.

---

## Goals:
1. **Authentication**:
   - Implement **Sign Up**, **Login**, and **Token Persistence** with JWT.
   - Use Redux to manage authentication state and handle API calls with Async Thunks.
   
2. **Product Management**:
   - Fetch and display a list of products using Axios.
   - Show product details and allow basic product filtering.
   
3. **State Management with Redux Toolkit**:
   - Use Redux to handle authentication and product data.
   
4. **Routing**:
   - Implement multiple pages: **Home**, **Login**, **Sign Up**, **Product Details**, and **Profile**.

---

## Features & Implementation Details:

### Authentication:
- **Sign Up & Login**: Implement forms for user authentication and store JWT token in `localStorage`.
- **Token Persistence**: Check for the JWT token in `localStorage` on app load to auto-login the user.
- **Error Handling**: Display errors for invalid credentials using toast notifications.

### Product Management:
- **Product List**: Fetch and display products from the Platzi API.
- **Product Details**: Show detailed information for each product.
- **Pagination/Infinite Scroll**: Optionally, add pagination or infinite scroll for product list optimization.

### State Management with Redux:
- Use Redux Toolkit's **createSlice** and **createAsyncThunk** to manage global state for authentication and product data.

### Axios HTTP Service:
- Create an Axios instance to handle API requests and set up interceptors to attach JWT token for authenticated requests.

### Routing:
- **Home Page**: Display a list of products.
- **Product Details**: Show product details.
- **Login & Sign Up Pages**: Forms for user authentication.
- **Profile Page**: Display logged-in user's profile and allow for logout.

---

## Expected End Results:
- A working React app with user authentication, JWT token management, and interaction with the Platzi Fake Store API.
- **Multiple Pages**: Home, Login, Sign Up, Product Details, and Profile.
- **State Management**: Using Redux Toolkit for authentication and product data.
- **User Experience**: Loading indicators, error handling, and optimized performance.

---

## Bonus (Optional):
- **Product Search**: Implement search functionality for products.
- **Category Filter**: Allow users to filter products by category.
- **Dark Mode**: Implement a toggle for dark mode.

---

## Deliverables:
1. **Source Code**: Submit your code via GitHub.
2. **Live Demo**: Deploy your app on platforms like Vercel or Netlify.
3. **Documentation**: Provide a README with setup instructions.

---

## Evaluation Criteria:
- **Functionality**: Correct implementation of authentication and product management.
- **Code Quality**: Clean, modular, and maintainable code.
- **UI/UX**: Responsive and user-friendly design.
- **State Management**: Proper use of Redux Toolkit.
- **Error Handling & Feedback**: User-friendly error and loading messages.
- **Testing**: Bonus for adding unit/integration tests.

---

Good luck, and enjoy building the app!
