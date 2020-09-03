import mongoose from 'mongoose';

const connect = async (): Promise<void> => {
  const mongoUrl =
    process.env.MONGO_URL || `mongodb://127.0.0.1:127.0.0.1/relay`;

  mongoose.set('useUnifiedTopology', true);

  await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
};

export default connect;
