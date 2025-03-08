import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ArrowRight, Loader } from "lucide-react";


const LoginPage = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <div>
      <motion.div>
        <h2>Create Your Account</h2>
      </motion.div>

      <motion.div>
        <div>
          <form onSubmit = {handleSubmit}>

            {/* E-mail component */}
            <div>
              <label htmlFor='email'>
                Email Address
              </label>

              <div>
                <div>
                  <Mail aria-hidden='true'/>
                </div>
                <input
                  id='email'
                  type='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value )}
                  placeholder='your-email@example.com'
                />
              </div>
            </div>
            
            {/* Password */}
            <div>
              <label htmlFor='password'>
                Password
              </label>

              <div>
                <div>
                  <Lock aria-hidden='true'/>
                </div>
                <input
                  id='password'
                  type='password'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='password'
                />
              </div>
            </div>
            
            <button
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader aria-hidden='true'/>
                  Loading...
                </>
              ):(
                <>
                  <LogIn aria-hidden='true' />
                  Login
                </>
              )}
            </button>
          </form>

          <p>
            Not a member?{" "}
            <Link to='/signup'>
              SignUp here <ArrowRight />
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginPage;