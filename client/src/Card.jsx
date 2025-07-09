import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import { useNavigate } from 'react-router-dom';


export default function OutlinedCard({title,description,status,onComplete,delete_Task,id}) {
  const navigate=useNavigate();
  return (
    <Box sx={{ maxWidth: 275 }} className="mx-2">
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <div className='flex flex-wrap justify-between'>
            <Typography
              variant="h5"
              component="div"
              sx={{ textDecoration: status ? 'line-through' : 'none' }}
              >
              {title}
            </Typography>
              {!status &&
                <EditSquareIcon onClick={()=>navigate(`/edit/${id}`)} className='cursor-pointer'/>
                  }
            </div>
      
            <Typography variant="body2" className="mt-4 text-xl">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            {!status && (
            <Button variant="contained" onClick={onComplete}>
              Mark As Completed!
            </Button>)}
            {status && (
              <Button variant="contained" color='error' onClick={delete_Task}>
              Delete task
            </Button>
            )}
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}