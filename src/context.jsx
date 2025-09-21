import { createContext, useState, useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // Sidebar is closed by default
  const [isModalOpen, setIsModalOpen] = useState(false) // Modal is closed by default

  const openSidebar = () => {
    setIsSidebarOpen(true)
  } // Function to open the sidebar

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  } // Function to close the sidebar

  const openModal = () => {
    setIsModalOpen(true)
  } // Function to open the modal

  const closeModal = () => {
    setIsModalOpen(false)
  } // Function to close the modal

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
