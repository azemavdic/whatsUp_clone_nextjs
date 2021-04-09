import { Avatar, Button, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';

const Sidebar = () => {
    return (
        <Container>
            <Header>
                <UserAvatar />
                <IconsContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </IconsContainer>
            </Header>
            <Search>
                <SearchIcon />
                <SearchInput placeholder='Pretraži' />
            </Search>
            <SidebarButton>Novi chat</SidebarButton>
            {/* List of chats */}
        </Container>
    );
};

export default Sidebar;

//Styled Components
const Container = styled.div`
    max-width: 250px;
    min-height: 100vh;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px;
`;

const SearchInput = styled.input`
    outline-width: 0;
    border: none;
    flex: 1;
`;

const SidebarButton = styled(Button)`
    width: 100%;
    &&& {
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`;

const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;

const IconsContainer = styled.div``;
