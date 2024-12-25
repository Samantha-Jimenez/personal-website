export const openMenu = (menu: string, openPortfolioMenu: boolean, setOpenPortfolioMenu: React.Dispatch<React.SetStateAction<boolean>>, openGithubMenu: boolean, setOpenGithubMenu: React.Dispatch<React.SetStateAction<boolean>>, setActiveMenu: React.Dispatch<React.SetStateAction<string | null>>) => {
    setActiveMenu(menu);
    // Close the other menu when one is opened
    if (menu === 'portfolio') {
        if (openPortfolioMenu) { 
            setOpenPortfolioMenu(false);
        } else {
            setOpenPortfolioMenu(true);
            setOpenGithubMenu(false);
        }
    } else if (menu === 'github') {
        if (openGithubMenu) {
            setOpenGithubMenu(false);
        } else { 
            setOpenGithubMenu(true);
            setOpenPortfolioMenu(false);
        }
    }
}; 