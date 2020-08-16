import React from "react";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  createPost: {
    marginTop: 10,
  },
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
}));

const CreatePostButton = () => {
  const classes = useStyles();

  return (
    <Link to="/post/new" className={classes.link}>
      <Button
        className={classes.createPost}
        fullWidth
        variant="contained"
        color="secondary"
        startIcon={<CreateIcon />}
      >
        Create Post
      </Button>
    </Link>
  );
};

export default CreatePostButton;
