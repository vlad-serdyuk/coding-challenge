import React, { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DoneIcon from '@material-ui/icons/Done';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import ThemesList from './ThemesList';

const useStyles = makeStyles(theme => ({
  root: {
    width: '30rem',
  },
  selectedTheme: {
    height: 32,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chip: {
    marginLeft: 10,
  },
  button: {
    width: '100%',
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: '100%',
  },
  select: {
    visibility: 'hidden',
  },
}));

export default function ThemesToolbar({
  themes,
  selectedTheme,
  hasMoreThemes,
  onGetThemes,
  onSelectTheme,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const selectTheme = useCallback((params) => {
    handleClose();
    onSelectTheme(params);
  }, [open]);

  return (
    <Container className={classes.root}>
      <Box className={classes.selectedTheme}>
        <Typography>{selectedTheme ? 'Your current selected theme is' : 'Please select a theme:'}</Typography>
        {
          selectedTheme &&
            <Chip
              className={classes.chip}
              label={selectedTheme}
              color="primary"
              deleteIcon={<DoneIcon />}
            />
        }
      </Box>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleOpen}
      >
        Select a theme
      </Button>
      <FormControl className={classes.formControl}>
        <Select
          open={open}
          className={classes.select}
          onClose={handleClose}
          onOpen={handleOpen}
        >
          <ThemesList
            themes={themes}
            selectedTheme={selectedTheme}
            hasMoreThemes={hasMoreThemes}
            onGetThemes={onGetThemes}
            onSelectTheme={selectTheme}
          />
        </Select>
      </FormControl>
    </Container>
  );
};