import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Customlink({ children, to, ...props }) {
          let resolved = useResolvedPath(to);
          let match = useMatch({ path: resolved.pathname, end: true });
        
          return (
            <div>
              <Link
                style={{borderBottom : match ? '2px solid blue' : 'none' , padding:'5px 15px',  }}
                to={to}
                {...props}
              >
                {children}
              </Link>
            </div>
          );
        }

export default Customlink;