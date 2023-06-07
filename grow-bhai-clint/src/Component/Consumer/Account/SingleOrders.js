import React, { useState } from 'react';
import jsPDF from 'jspdf';

const SingleOrders = ({ pd }) => {
  const { _id, amount, paymentMethod, status, DetailedProduct } = pd;
  const [orderStatus, setOrderStatus] = useState('not_received');

  const pdfGeneration = () => {
    // Create a new document in jspdf
    var doc = new jsPDF('p', 'pt');
    doc.setFont('courier', 'bold');

    // Calculate the center position based on the page width
    const pageWidth = doc.internal.pageSize.getWidth();
    const textWidth = doc.getStringUnitWidth(`The Item You bought from us : `) * doc.internal.getFontSize();
    const xPos = (pageWidth - textWidth) / 2;

    // Add the order ID (bold), total amount, and payment method to the PDF document
    doc.text(20, 20, `Order ID: ${_id}`);
    doc.setFont(undefined, 'normal');
    doc.text(`Hey, ${pd.name} !!`, 20, 60);
    doc.setFont(undefined, 'bold');
    doc.text(xPos, 100, `The Item You bought from us : `);

    // Set column headers
    doc.setFont('courier', 'bold');
    doc.text(20, 140, 'Name');
    doc.text(150, 140, 'Quantity');
    doc.text(250, 140, 'Unit Price');

    // Iterate over the DetailedProduct array
    DetailedProduct.forEach((product, index) => {
      const { name, quantity, price } = product;
      const yPos = 160 + index * 20;

      // Add product details to the PDF document
      doc.setFont('courier', 'normal');
      doc.text(20, yPos, name);
      doc.text(150, yPos, quantity.toString());
      doc.text(250, yPos, price.toString());
    });

    doc.text(20, 200, `Payment Method: ${paymentMethod}`);
    doc.text(20, 220, `Total Amount: ${amount}`);

    // Save the PDF
    doc.save('invoice.pdf');
  };


  const handleUpdateStatus = async () => {
    try {
        const response = await fetch(`http://localhost:5000/Corder/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ orderStatus })
        });

        if (response.ok) {
            alert('Order status updated successfully');
            console.log('Order status updated successfully');
        } else {
            console.log('Failed to update order status');
        }
    } catch (error) {
        console.log(error.message);
    }
};

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-96">
      <h2 className="text-lg font-semibold">Order ID: {_id}</h2>
      <p className="text-blue-700">Order Details:</p>
      <p className="text-gray-700">Total Amount: {amount}</p>
      <p className="text-gray-700">Payment Method: {paymentMethod}</p>
      <p className="text-gray-700">
        Order Status: <span className="text-red-700">{status}</span>
      </p>
      {status === 'send' && (
        <div className="mt-4">
          <label htmlFor="status">Update Status:</label>
          <select id="OrderStatus" value={orderStatus} onChange={(e) => setOrderStatus(e.target.value)}>
            <option value="not_received">Not Received</option>
            <option value="received">Received</option>
          </select>
          <button className="btn btn-primary" onClick={handleUpdateStatus}>
                        Update
                    </button>
        </div>
      )}
      <button onClick={pdfGeneration} className="mt-5 btn btn-primary">
        Download Invoice
      </button>
    </div>
  );
};

export default SingleOrders;

