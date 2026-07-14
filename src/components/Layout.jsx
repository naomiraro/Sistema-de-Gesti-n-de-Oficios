import Sidebar from './Sidebar'

export default function Layout({ children }) {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <main style={{
                flex: 1,
                marginLeft: '260px',
                padding: '2rem',
                minHeight: '100vh'
            }}>
                {children}
            </main>
        </div>
    )
}