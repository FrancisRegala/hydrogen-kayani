import HeaderTop from './HeaderTop';
import Header from './Header';

export function Layout({children, title}) {
    
    return (
      <>
        <div className='flex flex-col min-h-screen antialiased bg-neutral-50'>
          <HeaderTop />
          <Header />

          <main
            role="main"
            id="mainContent"
            className="flex-grow"
            style={{ backgroundColor: '#F9EDEB' }}
          >
            {children ? children : null}
          </main>
          
        </div>
      </>
    );
  }
  