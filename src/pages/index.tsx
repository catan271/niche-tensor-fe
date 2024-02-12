import React, { useEffect, useState } from 'react';
import { Panel } from '../client/components/Panel/Panel';
import { Button, Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { CustomSelect } from '../client/components/Elements/CustomSelect';
import { ModelName } from '../types/ModelName';
import { Style } from '../types/Style';
import { AspectRatio } from '../types/AspectRatio';
import SvgIcon, { Icon } from '../client/components/Icon/SvgIcon';
import { generateImage } from '../client/requests/generate';
import { initialValues } from '../client/constants/initialValues';
import { CloseCircleOutlined } from '@ant-design/icons';
import { exampleData } from '../client/constants/exampleData';

enum Status {
    Blank,
    Loading,
    Image,
    Error,
}

export default function Home() {
    const [image, setImage] = useState<string>();
    const [status, setStatus] = useState(Status.Blank);
    const [isValid, setIsValid] = useState(false);

    const [form] = Form.useForm();
    const values = Form.useWatch(undefined, form);
    useEffect(() => {
        form.validateFields({ validateOnly: true }).then(
            () => setIsValid(true),
            () => setIsValid(false),
        );
    }, [values]);

    const handleClear = () => {
        form.resetFields();
        form.setFieldsValue(initialValues);
        setStatus(Status.Blank);
        setImage(undefined);
    };

    const handleSubmit = async () => {
        try {
            setStatus(Status.Loading);
            const { data } = await generateImage(values);
            setImage(`data:image/png;base64,${data}`);
            setStatus(Status.Image);
        } catch {
            setStatus(Status.Error);
        } finally {
            document.querySelector('#image-panel')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDownload = async () => {
        if (image) {
            const downloadLink = document.createElement('a');
            downloadLink.href = image;
            downloadLink.download = 'download.png';
            downloadLink.click();
        }
    };

    const handleClickExample = (examplePrompt: string) => {
        form.setFieldValue('prompt', examplePrompt);
    };

    return (
        <div className="home-page flex-1 mb-0 grid grid-cols-12 gap-24 min-h-400">
            <div className="md:col-span-7 col-span-12 flex flex-col space-y-12">
                <Panel>
                    <Form
                        form={form}
                        id="image-generate-form"
                        layout="vertical"
                        requiredMark={false}
                        initialValues={initialValues}
                        onFinish={handleSubmit}
                        validateTrigger={['onSubmit']}
                    >
                        <Form.Item name="prompt" label="Description prompt" rules={[{ required: true }]}>
                            <TextArea
                                className="!min-h-72 px-0 bg-transparent !border-0 !shadow-none text-textColor"
                                placeholder="What do you want to see?"
                                autoSize
                            />
                        </Form.Item>
                        <div className="flex flex-wrap gap-8">
                            <Form.Item name="modelName" rules={[{ required: true }]}>
                                <CustomSelect
                                    placeholder="No model"
                                    options={[
                                        { value: ModelName.AnimeV3, label: ModelName.AnimeV3 },
                                        { value: ModelName.RealisticVision, label: ModelName.RealisticVision },
                                        { value: ModelName.SDXLTurbo, label: ModelName.SDXLTurbo },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item name="aspectRatio">
                                <CustomSelect
                                    placeholder="No ratio"
                                    options={[
                                        {
                                            value: AspectRatio.Square,
                                            label: AspectRatio.Square,
                                            icon: <SvgIcon icon={Icon.Square} />,
                                        },
                                        {
                                            value: AspectRatio.Wide,
                                            label: AspectRatio.Wide,
                                            icon: <SvgIcon icon={Icon.Wide} />,
                                        },
                                        {
                                            value: AspectRatio.Tall,
                                            label: AspectRatio.Tall,
                                            icon: <SvgIcon icon={Icon.Tall} />,
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item name="style">
                                <CustomSelect
                                    placeholder="No style"
                                    options={[
                                        { value: null, label: 'No style' },
                                        { value: Style.Anime, label: Style.Anime },
                                        { value: Style.Realistic, label: Style.Realistic },
                                        { value: Style.Cartoon, label: Style.Cartoon },
                                    ]}
                                />
                            </Form.Item>
                        </div>
                    </Form>
                </Panel>
                <div className="text-right space-x-12">
                    <Button ghost type="primary" onClick={handleClear}>
                        Clear
                    </Button>
                    <Button
                        type="primary"
                        form="image-generate-form"
                        htmlType="submit"
                        disabled={!isValid}
                        loading={status === Status.Loading}
                    >
                        Generate
                    </Button>
                </div>
                <Panel className="flex-1 min-h-200">
                    <div className="flex gap-8 h-full">
                        {exampleData.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="example-item"
                                    onClick={() => handleClickExample(item.prompt)}
                                >
                                    <img
                                        alt={item.prompt}
                                        className="example-item__img"
                                        src={`/images/example/${item.image}`}
                                    />
                                    <p className="example-item__prompt">{item.prompt}</p>
                                </div>
                            );
                        })}
                    </div>
                </Panel>
            </div>
            <div
                id="image-panel"
                className="md:col-span-5 col-span-12 md:h-full h-[calc(100vw-1.875rem*2)] flex flex-col overflow-hidden"
            >
                <Panel className="h-full flex flex-col items-center justify-center overflow-hidden">
                    {status === Status.Blank && <div>Your image will appear here</div>}
                    {status === Status.Loading && (
                        <div className="flex items-center w-full relative">
                            <div className="meter w-full">
                                <span style={{ width: '100%' }}></span>
                            </div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2">Generating</div>
                        </div>
                    )}
                    {status === Status.Image && (
                        <div className="overflow-hidden rounded-8 text-center relative group">
                            <div
                                className="absolute right-0 md:opacity-0 group-hover:opacity-100"
                                onClick={handleDownload}
                            >
                                <SvgIcon icon={Icon.Download} />
                            </div>
                            <img className="max-w-full max-h-full" src={image} alt="" />
                        </div>
                    )}
                    {status === Status.Error && (
                        <div className="text-center flex flex-col items-center text-danger">
                            <CloseCircleOutlined className="text-80" />
                            <span>Cannot generate image</span>
                        </div>
                    )}
                </Panel>
            </div>
        </div>
    );
}
