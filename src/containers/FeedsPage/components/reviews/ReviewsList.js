import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Emoji from './Emoji';

const useStyles = makeStyles(theme => ({
  emojiBlock: {
    display: 'flex',
  },
}));

const rowsPerPage = 15;

export default function ReviewsList({ reviews, reviewsPage, onGetReviews }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);

  const columns = [
    {
     name: 'comment',
     label: 'Review',
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: 'emoji',
     label: 'Themes',
     options: {
      filter: false,
      sort: false,
      customBodyRender: (emojis) => {
        return (
          <div className={classes.emojiBlock}>
            {emojis.map((emoji, idx) => <Emoji key={idx} name={emoji.name} count={emoji.count} />)}
          </div>
        );
      },
     }
    },
   ];

   const options = {
    filterType: 'dropdown',
    print: false,
    download: false,
    footer: false,
    viewColumns: false,
    selectableRows: 'none',
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: [rowsPerPage],
    onChangePage: (pageNum) => {
      // a developer could react to change on an action basis or
      // examine the state as a whole and do whatever they want
      // reviewsPage
      if ((reviewsPage === 0) && (pageNum > page)) {
        onGetReviews();
        setPage(pageNum);
      }
    }
  };

  return (
    <Box width={1}>
      <MUIDataTable
        title="Reviews"
        data={reviews}
        columns={columns}
        options={options}
      />
    </Box>
  );
};
