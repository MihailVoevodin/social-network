import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, getUsers, changePage } from "../../redux/usersReducer";
import Users from "./Users";
import Spinner from "../../Common/Spinner/Spinner";

class UsersContainer extends React.Component  {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (currentPage) => {
        this.props.changePage(currentPage, this.props.pageSize)
    }
    
    render() {
        return (
            <>{this.props.isFetching ? <Spinner/> :
                <Users  users={this.props.users}
                        onPageChange={this.onPageChange}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followingInProgress={this.props.followingInProgress}/>
            }
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default connect(mapStateToProps, {follow, unfollow, getUsers, changePage})(UsersContainer);