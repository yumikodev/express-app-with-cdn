import { Router } from "express";
const router = Router();

let data = <
  {
    filename: string | undefined;
    originalname: string | undefined;
    mimetype: string | undefined;
    path: string;
    size: number | undefined;
  }[]
>[];

router.post("/upload", (req, res) => {
  data.push({
    filename: req.file?.filename,
    originalname: req.file?.originalname,
    mimetype: req.file?.mimetype,
    path: `http://localhost:4000/uploads/${req.file?.filename}`,
    size: req.file?.size,
  });

  const i = data.find((f) => f.filename === req.file?.filename);
  console.log(i);
  res.status(200).json({ data: i });
});

export default router;
